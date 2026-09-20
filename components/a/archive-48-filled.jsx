import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lufy5fbnl {
  fill: currentColor;
  d: path("M8 17.398q.485.1 1 .102h30q.515-.001 1-.1v18.35A6.25 6.25 0 0 1 33.75 42h-19.5A6.25 6.25 0 0 1 8 35.75zM20.25 22a1.25 1.25 0 1 0 0 2.5h7.5a1.25 1.25 0 1 0 0-2.5zM39 6a3 3 0 0 1 3 3v3.5a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3z");
}
</style><path class="lufy5fbnl"/>`,
		"fallback": "fluent:archive-48-filled",
	});
}

export default Component;
