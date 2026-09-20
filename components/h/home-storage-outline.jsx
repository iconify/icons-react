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
		"content": `<style>.toyyr9lep {
  fill: currentColor;
  d: path("M5 21L3 9h18l-2 12zm1.675-2h10.65l1.275-8H5.4zM10 15h4q.425 0 .713-.288T15 14t-.288-.712T14 13h-4q-.425 0-.712.288T9 14t.288.713T10 15M6 8q-.425 0-.712-.288T5 7t.288-.712T6 6h12q.425 0 .713.288T19 7t-.288.713T18 8zm2-3q-.425 0-.712-.288T7 4t.288-.712T8 3h8q.425 0 .713.288T17 4t-.288.713T16 5zM6.675 19h10.65z");
}
</style><path class="toyyr9lep"/>`,
		"fallback": "material-symbols:home-storage-outline",
	});
}

export default Component;
