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
		"content": `<style>.jg96o2tiz {
  fill: currentColor;
  d: path("M2 22L7 8l9 9zm12.55-9.45L13.5 11.5l5.6-5.6q.8-.8 1.925-.8t1.925.8l.6.6l-1.05 1.05l-.6-.6q-.35-.35-.875-.35t-.875.35zm-4-4L9.5 7.5l.6-.6q.35-.35.35-.85t-.35-.85l-.65-.65L10.5 3.5l.65.65q.8.8.8 1.9t-.8 1.9zm2 2L11.5 9.5l3.6-3.6q.35-.35.35-.875t-.35-.875l-1.6-1.6l1.05-1.05l1.6 1.6q.8.8.8 1.925t-.8 1.925zm4 4L15.5 13.5l1.6-1.6q.8-.8 1.925-.8t1.925.8l1.6 1.6l-1.05 1.05l-1.6-1.6q-.35-.35-.875-.35t-.875.35z");
}
</style><path class="jg96o2tiz"/>`,
		"fallback": "material-symbols:celebration",
	});
}

export default Component;
