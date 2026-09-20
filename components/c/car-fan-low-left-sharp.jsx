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
		"content": `<style>.c8o6skb5t {
  fill: currentColor;
  d: path("m13.275 23l-2.9-5H2.5l-1.4-6.975q-.225-1.2.538-2.113T3.6 8q.85 0 1.525.55t.925 1.425L7.5 15h3.475L15 22zM3 7q-.825 0-1.412-.587T1 5t.588-1.412T3 3t1.413.588T5 5t-.587 1.413T3 7m14 5l-5-5l1.4-1.4L16 8.175V2h2v6.175l2.6-2.6L22 7z");
}
</style><path class="c8o6skb5t"/>`,
		"fallback": "material-symbols:car-fan-low-left-sharp",
	});
}

export default Component;
