import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.hsfqj2b5g {
  d: path("M7.47 12.28l.084.074a.75.75 0 0 0 .977-.073l2.72-2.72v6.69l.006.102a.75.75 0 0 0 .743.648l.102-.007a.75.75 0 0 0 .648-.743V9.56l2.72 2.721l.085.073a.75.75 0 0 0 .977-1.133l-4-4.002l-.085-.072a.75.75 0 0 0-.976.072L7.47 11.22l-.073.084a.75.75 0 0 0 .073.977z");
  fill: currentColor;
}

.ig7ayebbo {
  d: path("M22 12c0-5.522-4.476-10-10-10C6.479 2 2 6.479 2 12c0 5.524 4.478 10 10 10c5.524 0 10-4.476 10-10zM3.5 12a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0z");
  fill: currentColor;
}
</style><g class="ft5dv1b6b"><path class="hsfqj2b5g"/><path class="ig7ayebbo"/></g>`,
		"fallback": "fluent:arrow-up-circle-24-regular",
	});
}

export default Component;
