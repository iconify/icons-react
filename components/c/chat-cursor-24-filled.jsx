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
		"content": `<style>.zvk9v8bcw {
  fill: currentColor;
  d: path("M12 11a1 1 0 0 1 1.6-.8l8 6c.768.577.361 1.8-.6 1.8h-4.4a1 1 0 0 0-.882.53l-1.835 3.44c-.49.92-1.883.571-1.883-.47zM10 1a8 8 0 0 1 7.473 10.855L14.2 9.4C12.882 8.412 11 9.352 11 11v5.936a7.96 7.96 0 0 1-4.645-.815l-3.423.857a.75.75 0 0 1-.91-.91l.856-3.425A8 8 0 0 1 10 1");
}
</style><path class="zvk9v8bcw"/>`,
		"fallback": "fluent:chat-cursor-24-filled",
	});
}

export default Component;
