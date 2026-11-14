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
		"content": `<style>.zjhdj5bgu {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.75 18.25q0 1.25 1.25 1.25h15q2.25 0 2.25-2.25V8q0-1.391-1.244-2.012q-1.244-.622-2.356.212l-4.96 3.72q-.115-.487-.44-.92l-1.5-2q-1.5-2-3.5-.5l-2 1.5q-2 1.5-.5 3.5l1.5 2q.325.433.76.68l-3.56 2.67q-.7.525-.7 1.4");
}
</style><path class="zjhdj5bgu"/>`,
		"fallback": "uix-solid:inclined-plane-block",
	});
}

export default Component;
