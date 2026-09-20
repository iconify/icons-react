import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fqnsw_bmb {
  stop-color: var(--svg-color--fb0766, #fb0766);
}

.klv2cobww {
  fill: var(--svg-color--fff, #fff);
  d: path("M83.914 62.873h12.525v82.661H83.914zm76.149 20.039h12.524v62.622h-12.524zm-50.599 0h12.524v110.466h-12.524zm25.049 0h12.525v110.466h-12.525z");
}

.pawiit3or {
  stop-color: var(--svg-color--c50948, #c50948);
}

.tmbkaq7lv {
  d: path("M0 0h256v256H0z");
}
</style><defs><linearGradient id="SVGIMEzUanW" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" class="fqnsw_bmb"/><stop offset="100%" class="pawiit3or"/></linearGradient></defs><path fill="url(#SVGIMEzUanW)" class="tmbkaq7lv"/><path class="klv2cobww"/>`,
		"fallback": "logos:gitter",
	});
}

export default Component;
