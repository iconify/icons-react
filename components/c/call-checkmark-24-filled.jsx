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
		"content": `<style>.czc_4db1d {
  fill: currentColor;
  d: path("M21.78 3.28a.75.75 0 1 0-1.06-1.06L15 7.94l-1.87-1.87a.75.75 0 0 0-1.06 1.06l2.4 2.4a.75.75 0 0 0 1.06 0zM6.85 2.095l-1.077.344c-1.067.341-1.885 1.256-2.149 2.404q-.941 4.095 2.258 9.968q3.195 5.866 7.003 7.054c1.076.335 2.238.039 3.052-.778l.818-.822c.763-.765.874-2.012.258-2.915l-1.232-1.81c-.529-.778-1.468-1.108-2.33-.82l-2.276.758a8.7 8.7 0 0 1-2.27-2.595q-.91-1.563-1.085-3.177l1.894-1.798c.68-.646.889-1.685.514-2.568l-.86-2.027c-.432-1.02-1.51-1.54-2.518-1.218");
}
</style><path class="czc_4db1d"/>`,
		"fallback": "fluent:call-checkmark-24-filled",
	});
}

export default Component;
