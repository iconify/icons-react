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
		"content": `<style>.pxil1abnu {
  fill: var(--svg-color--c1c1c1, #c1c1c1);
  d: path("m11.477 18l4.5-8l-4.5-8l-4.5 8Zm9.043-4l-4.5 8l4.5 8l4.5-8Z");
  opacity: var(--svg-opacity--0-8, 0.8);
}

.t_ieb-b9f {
  fill: var(--svg-color--c1c1c1, #c1c1c1);
  d: path("m20.477 2l-4.5 8h-9l4.5-8zM11.52 30l4.5-8h9l-4.5 8z");
  opacity: var(--svg-opacity--0-45, 0.45);
}

.za-cxxbxu {
  fill: var(--svg-color--c1c1c1, #c1c1c1);
  d: path("M15.975 10h9l-4.5-8h-9Zm.047 12h-9l4.5 8h9Z");
  opacity: var(--svg-opacity--0-6, 0.6);
}
</style><path class="t_ieb-b9f"/><path class="za-cxxbxu"/><path class="pxil1abnu"/>`,
		"fallback": "vscode-icons:file-type-solidity",
	});
}

export default Component;
