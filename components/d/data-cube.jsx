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
		"content": `<style>.m0-96deev {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m13.17 2.77l6.75 3.574q.335.178.586.406q-.19-.001-.357.087L12 11.151L3.851 6.837q-.167-.088-.357-.087q.251-.228.586-.406l6.75-3.574q1.17-.619 2.34 0m7.681 5.393q.207-.11.315-.317q.084.329.084.708v6.892q0 1.505-1.33 2.21l-6.75 3.574q-.289.153-.578.23q.077-.098.117-.217q.041-.118.041-.243v-8.548zm-9.601 4.289L3.149 8.163q-.207-.11-.315-.317q-.084.328-.084.708v6.892q0 1.505 1.33 2.21l6.75 3.574q.289.153.578.23q-.077-.098-.117-.217q-.041-.118-.041-.243z");
}
</style><path class="m0-96deev"/>`,
		"fallback": "uix-solid:data-cube",
	});
}

export default Component;
