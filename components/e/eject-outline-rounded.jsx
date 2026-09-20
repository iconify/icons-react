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
		"content": `<style>.h05vnnbma {
  fill: currentColor;
  d: path("M6.616 17.423h10.769q.196 0 .329.133q.132.132.132.327t-.132.33t-.33.133H6.617q-.197 0-.33-.132q-.132-.133-.132-.328t.133-.33t.329-.133m.528-4.03l4.185-6.231q.13-.195.305-.278q.174-.084.366-.084t.366.084q.175.083.305.278l4.185 6.23q.273.404.035.833t-.712.429H7.82q-.475 0-.712-.429t.035-.833m.983.339h7.746L12 7.946z");
}
</style><path class="h05vnnbma"/>`,
		"fallback": "material-symbols-light:eject-outline-rounded",
	});
}

export default Component;
