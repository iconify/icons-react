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
		"content": `<style>.h1xa6aciy {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5.75 7q0-1.968 1.391-3.359T10.5 2.25t3.359 1.391T15.25 7t-1.391 3.359T10.5 11.75t-3.359-1.391T5.75 7m-1.032 7.923Q2.25 16.702 2.25 19.5q0 1.75 1.75 1.75h9.264Q12 20.319 12 18q0-3.553 2.968-3.848q-1.926-.902-4.468-.902q-3.462 0-5.782 1.673m10.813 5.702q1.463 0 2.469-1.232q1.006 1.232 2.469 1.232q2.281 0 2.281-2.625t-2.281-2.625q-1.463 0-2.469 1.232q-1.006-1.232-2.469-1.232q-2.281 0-2.281 2.625t2.281 2.625m0-3.75q.937 0 1.614 1.125q-.677 1.125-1.614 1.125q-.781 0-.781-1.125t.781-1.125m4.938 2.25q-.937 0-1.614-1.125q.677-1.125 1.614-1.125q.781 0 .781 1.125t-.781 1.125");
}
</style><path class="h1xa6aciy"/>`,
		"fallback": "uix-solid:devops-engineer",
	});
}

export default Component;
