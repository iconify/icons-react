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
		"content": `<style>.t0b9w0h1c {
  fill: currentColor;
  d: path("M12.288 18.713Q12 18.425 12 18v-8H4q-.425 0-.712-.288T3 9t.288-.712T4 8h9q.425 0 .713.288T14 9v9q0 .425-.288.713T13 19t-.712-.288m5-5Q17 13.425 17 13V5H9q-.425 0-.712-.288T8 4t.288-.712T9 3h9q.425 0 .713.288T19 4v9q0 .425-.288.713T18 14t-.712-.288");
}
</style><path class="t0b9w0h1c"/>`,
		"fallback": "material-symbols:arrows-more-up-rounded",
	});
}

export default Component;
