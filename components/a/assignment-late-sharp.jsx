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
		"content": `<style>.p50h1nmuh {
  fill: currentColor;
  d: path("M12.713 16.713Q13 16.425 13 16t-.288-.712T12 15t-.712.288T11 16t.288.713T12 17t.713-.288M11 13h2V7h-2zm-8 8V3h6.2q.325-.9 1.088-1.45T12 1t1.713.55T14.8 3H21v18zm9.538-16.963q.212-.212.212-.537t-.213-.537T12 2.75t-.537.213t-.213.537t.213.538t.537.212t.538-.213");
}
</style><path class="p50h1nmuh"/>`,
		"fallback": "material-symbols:assignment-late-sharp",
	});
}

export default Component;
