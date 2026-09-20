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
		"content": `<style>.lvf3x8tzo {
  fill: currentColor;
  d: path("m2.6 10l.275-4.125q.05-.8.625-1.338T4.875 4h14.25q.8 0 1.375.537t.625 1.338L21.4 10zM5 20l-.325-1H4.15q-.875 0-1.463-.625t-.537-1.5L2.475 12h19.05l.325 4.875q.05.875-.537 1.5T19.85 19h-.525L19 20z");
}
</style><path class="lvf3x8tzo"/>`,
		"fallback": "material-symbols:google-wifi-rounded",
	});
}

export default Component;
