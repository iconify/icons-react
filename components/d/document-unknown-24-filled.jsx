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
		"content": `<style>.eq3yc293w {
  d: path("M13.5 2.5V8a.5.5 0 0 0 .5.5h5.5l-6-6z");
  fill: currentColor;
}

.ft5dv1b6b {
  fill: none;
}

.s-pzo4ogy {
  d: path("M1 17.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 0 0-11 0zm4.75 3.25a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0zM4.5 16a2 2 0 1 1 4 0c0 .73-.212 1.14-.754 1.708l-.264.27l-.116.124C7.083 18.421 7 18.63 7 19a.5.5 0 0 1-1 0c0-.73.212-1.14.754-1.708l.264-.27l.116-.124c.283-.319.366-.527.366-.898a1 1 0 1 0-2 0a.5.5 0 0 1-1 0z");
  fill: currentColor;
}

.un9s6bbsl {
  d: path("M12 2v6a2 2 0 0 0 2 2h6v10a2 2 0 0 1-2 2h-6.81A6.5 6.5 0 0 0 4 11.498V4a2 2 0 0 1 2-2h6z");
  fill: currentColor;
}
</style><g class="ft5dv1b6b"><path class="un9s6bbsl"/><path class="eq3yc293w"/><path class="s-pzo4ogy"/></g>`,
		"fallback": "fluent:document-unknown-24-filled",
	});
}

export default Component;
