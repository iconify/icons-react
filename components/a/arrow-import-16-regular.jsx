import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.l39qu2fho {
  fill: currentColor;
  d: path("M13 12.5v-9a.5.5 0 0 1 .992-.09L14 3.5v9a.5.5 0 0 1-.992.09zM1.008 8.09L1 8a.5.5 0 0 1 .41-.492L1.5 7.5h8.792L7.611 4.818a.5.5 0 0 1-.058-.638l.058-.069a.5.5 0 0 1 .638-.058l.069.058l3.536 3.535a.5.5 0 0 1 .057.638l-.057.07l-3.536 3.535a.5.5 0 0 1-.765-.638l.058-.069L10.292 8.5H1.5a.5.5 0 0 1-.492-.41L1 8z");
}
</style><path class="l39qu2fho"/>`,
		"fallback": "fluent:arrow-import-16-regular",
	});
}

export default Component;
