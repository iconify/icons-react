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
		"content": `<style>.wohlrrbht {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14.25 6.5q0-3.25 3.25-3.25t3.25 3.25t-3.25 3.25q-1.095 0-1.821-.369l-.798.798q.369.726.369 1.821q0 3.25-3.25 3.25q-1.095 0-1.821-.369l-.798.798q.369.726.369 1.821q0 3.25-3.25 3.25T3.25 17.5t3.25-3.25q1.095 0 1.821.369l.798-.798Q8.75 13.095 8.75 12q0-3.25 3.25-3.25q1.095 0 1.821.369l.798-.798q-.369-.726-.369-1.821");
}
</style><path class="wohlrrbht"/>`,
		"fallback": "uix-solid:beading-string",
	});
}

export default Component;
