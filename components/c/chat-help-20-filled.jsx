import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dh8-robqr {
  fill: currentColor;
  d: path("M2 10a8 8 0 1 1 4.262 7.075l-3.64.91a.5.5 0 0 1-.607-.606l.91-3.641A8 8 0 0 1 2 10m7.25-2.693C9.403 7.134 9.64 7 10 7s.597.134.75.307c.161.184.25.438.25.693c0 .317-.071.523-.166.685c-.101.174-.236.314-.423.51l-.022.024c-.189.197-.421.444-.598.781c-.18.346-.291.761-.291 1.293a.5.5 0 1 0 1 0c0-.384.077-.638.177-.829c.105-.2.248-.359.434-.554l.042-.043c.17-.177.382-.398.545-.678c.186-.32.302-.7.302-1.189c0-.473-.161-.97-.5-1.354C11.153 6.252 10.64 6 10 6s-1.153.252-1.5.646C8.16 7.031 8 7.526 8 8a.5.5 0 0 0 1 0c0-.255.089-.51.25-.693m1.45 6.206a.7.7 0 1 0-1.4 0a.7.7 0 0 0 1.4 0");
}
</style><path class="dh8-robqr"/>`,
		"fallback": "fluent:chat-help-20-filled",
	});
}

export default Component;
