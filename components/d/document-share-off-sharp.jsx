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
		"content": `<style>.h4hfx-d6e {
  fill: currentColor;
  d: path("m20.154 21.685l-4.07-4.07q-.44.326-.984.289t-.948-.44t-.44-.948q-.037-.545.288-.985l-2.084-2.085q-.449.721-.682 1.557T11 16.737q0 1.194.406 2.277T12.562 21H5V6.53L2.046 3.578l.708-.708L20.86 20.977zm-5.887-10.666L6.248 3H14.5L19 7.5v2.685q-.244-.074-.494-.088T18 10.064q-1.023-.039-1.972.209t-1.76.746m4.166 4.034Q18 14.619 18 13.987t.434-1.067t1.066-.433t1.066.433t.434 1.067t-.434 1.066q-.433.434-1.066.434t-1.066-.434M14 4v4h4z");
}
</style><path class="h4hfx-d6e"/>`,
		"fallback": "material-symbols-light:document-share-off-sharp",
	});
}

export default Component;
