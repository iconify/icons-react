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
		"content": `<style>.y_tcv3voj {
  fill: currentColor;
  d: path("M7 2H4.75A2.75 2.75 0 0 0 2 4.75V7h2.268A2 2 0 0 1 7 4.268zM2 8v3.25A2.75 2.75 0 0 0 4.75 14H7V8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L6.293 8zm7.022 6H8V8.707l1.646 1.647a.5.5 0 0 0 .708-.708L8.707 8H18v2.257A5.5 5.5 0 0 0 9.022 14M18 7h-7.268A2 2 0 0 0 8 4.268V2h7.25A2.75 2.75 0 0 1 18 4.75zM8 6v1h1a1 1 0 1 0-1-1M7 7H6a1 1 0 1 1 1-1zm12 7.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15z");
}
</style><path class="y_tcv3voj"/>`,
		"fallback": "fluent:gift-card-add-20-filled",
	});
}

export default Component;
