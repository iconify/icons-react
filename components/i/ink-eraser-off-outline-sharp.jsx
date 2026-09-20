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
		"content": `<style>.ut63snbio {
  fill: currentColor;
  d: path("m19.833 21.26l-5.11-5.11L11.962 19H4.558l-2.55-2.55l6.388-6.627L2.74 4.167l.714-.713l17.092 17.092zM4.985 18h6.55l2.475-2.564l-4.925-4.925l-5.7 5.889zm11.832-3.994l-.713-.714l3.28-3.342L14.435 5l-3.261 3.362l-.707-.708l3.919-4.081l6.396 6.396zM11.56 12.96");
}
</style><path class="ut63snbio"/>`,
		"fallback": "material-symbols-light:ink-eraser-off-outline-sharp",
	});
}

export default Component;
