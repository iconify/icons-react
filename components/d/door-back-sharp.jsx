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
		"content": `<style>.fkrobmw2a {
  fill: currentColor;
  d: path("M3 21v-2h2V3h14v16h2v2zm7.713-8.287Q11 12.425 11 12t-.288-.712T10 11t-.712.288T9 12t.288.713T10 13t.713-.288");
}
</style><path class="fkrobmw2a"/>`,
		"fallback": "material-symbols:door-back-sharp",
	});
}

export default Component;
