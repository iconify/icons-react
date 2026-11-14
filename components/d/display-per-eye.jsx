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
		"content": `<style>.m_44mceto {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5 5.25h14q1.346 0 2.298.952T22.25 8.5v7q0 3.25-3.25 3.25h-4q-.099 0-.195-.026t-.181-.075q-.086-.05-.156-.12q-.07-.071-.119-.157L13.565 17h-3.13l-.784 1.372q-.049.086-.119.157q-.07.07-.156.12t-.181.075q-.096.026-.195.026H5q-3.25 0-3.25-3.25v-7q0-1.346.952-2.298T5 5.25m2.75 3q-3 0-3 3t3 3t3-3t-3-3m8.5 0q-3 0-3 3t3 3t3-3t-3-3");
}
</style><path class="m_44mceto"/>`,
		"fallback": "uix-solid:display-per-eye",
	});
}

export default Component;
