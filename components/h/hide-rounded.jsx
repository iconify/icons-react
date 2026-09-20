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
		"content": `<style>.h8j_3fr8z {
  fill: currentColor;
  d: path("m9 16.4l-3.875 3.9q-.3.3-.7.3t-.7-.3t-.3-.712t.3-.713L7.6 15H6q-.425 0-.712-.287T5 14t.288-.712T6 13h4q.425 0 .713.288T11 14v4q0 .425-.288.713T10 19t-.712-.288T9 18zM16.4 9H18q.425 0 .713.288T19 10t-.288.713T18 11h-4q-.425 0-.712-.288T13 10V6q0-.425.288-.712T14 5t.713.288T15 6v1.6l3.875-3.9q.3-.3.7-.3t.7.3t.3.712t-.3.713z");
}
</style><path class="h8j_3fr8z"/>`,
		"fallback": "material-symbols:hide-rounded",
	});
}

export default Component;
