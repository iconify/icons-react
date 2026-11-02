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
		"content": `<style>.dstl3hq3y {
  fill: currentColor;
  d: path("M8.126 6a4 4 0 0 1 7.748 0ZM4.707 7.293L6 8.586V8h12v.586l1.293-1.293a.999.999 0 1 1 1.414 1.414L18 11.414V12h3a1 1 0 0 1 0 2h-3.082a6 6 0 0 1-.642 1.861l2.431 2.432a.999.999 0 1 1-1.414 1.414l-2.262-2.262c-.85.77-1.9 1.282-3.031 1.473V11a1 1 0 0 0-2 0v7.918a6 6 0 0 1-3.031-1.473l-2.262 2.262a.999.999 0 1 1-1.414-1.414l2.431-2.432A6 6 0 0 1 6.082 14H3a1 1 0 0 1 0-2h3v-.586L3.293 8.707a.999.999 0 1 1 1.414-1.414");
}
</style><path class="dstl3hq3y"/>`,
		"fallback": "coolicons:bug-fill-sharp",
	});
}

export default Component;
