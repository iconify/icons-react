import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.b9or0u61i {
  fill: var(--svg-color--4c8de9, #4c8de9);
  d: path("M27.4 5.5h-9.2l-2.1 4.2H4.3v4H.5l3.8 12.8h25.2v-21Zm-7.2 2.1h7.1v2.1h-8.1Zm5.5 6.1H6.6v-1.9h20.8v7.626Z");
}

.feq5ir_5b {
  stroke-width: var(--svg-stroke-width--1-03px, 1.03px);
  d: path("M12.015 23.5h16.971");
}

.him10e6qi {
  fill: var(--svg-color--76afff, #76afff);
  stroke: var(--svg-color--0f3d7d, #0f3d7d);
}

.hve0t1y_i {
  cx: 20.5px;
  cy: 20.5px;
  rx: 2.5px;
  ry: 9px;
}

.r1fxrkgal {
  cx: 20.5px;
  cy: 20.5px;
  r: 9px;
}

.z0bj94rqh {
  stroke-width: var(--svg-stroke-width--1-033px, 1.033px);
  d: path("M12.015 17.5H29.1");
}
</style><path class="b9or0u61i"/><g class="him10e6qi"><circle class="r1fxrkgal"/><ellipse class="hve0t1y_i"/><path class="z0bj94rqh"/><path class="feq5ir_5b"/></g>`,
		"fallback": "vscode-icons:folder-type-domain-opened",
	});
}

export default Component;
