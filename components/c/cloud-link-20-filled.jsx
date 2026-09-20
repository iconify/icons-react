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
		"content": `<style>.usvahzw6a {
  fill: currentColor;
  d: path("M14.647 8.246C14.415 5.923 12.817 4 10 4S5.587 5.908 5.353 8.246h-.07C3.468 8.246 2 9.758 2 11.623S3.47 15 5.282 15h3.753a3.5 3.5 0 0 1 3.465-4h4c.532 0 1.036.119 1.488.331c-.144-1.728-1.553-3.085-3.27-3.085zM12.5 12a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H16a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5zm-3.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z");
}
</style><path class="usvahzw6a"/>`,
		"fallback": "fluent:cloud-link-20-filled",
	});
}

export default Component;
