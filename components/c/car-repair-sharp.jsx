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
		"content": `<style>.ksmrxpbvz {
  fill: currentColor;
  d: path("M11 22v-3H4v-2h16v2h-7v3zM9.713 11.212Q10 10.925 10 10.5t-.288-.712T9 9.5t-.712.288T8 10.5t.288.713T9 11.5t.713-.288m6 0Q16 10.926 16 10.5t-.288-.712T15 9.5t-.712.288T14 10.5t.288.713t.712.287t.713-.288M5 8.6L6.925 3h10.15L19 8.6V16h-2v-2H7v2H5zM7.65 7h8.7l-.7-2h-7.3z");
}
</style><path class="ksmrxpbvz"/>`,
		"fallback": "material-symbols:car-repair-sharp",
	});
}

export default Component;
