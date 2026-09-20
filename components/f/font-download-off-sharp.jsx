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
		"content": `<style>.t92oqopxx {
  fill: currentColor;
  d: path("m21.11 22.53l-7.966-7.965l1.22-.207l6.047 6.048V21H3V4.421L1.887 3.308l.713-.714l19.223 19.223zM21 18.184l-6.611-6.612l-1.954-5.379h-.87l-.67 1.885L5.816 3H21zm-13.562-.606H8.5l1.062-3.012h3.582l-.965-.965h-2.27l.597-1.673l-.744-.744zm4.512-9.75h.1l.77 2.175l-1.21-1.21zm3.55 9.75h1.062l-.578-1.598l-1.62-1.621z");
}
</style><path class="t92oqopxx"/>`,
		"fallback": "material-symbols-light:font-download-off-sharp",
	});
}

export default Component;
