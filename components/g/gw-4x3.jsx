import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnuvuxczj.css';
import '../../css/r/r6qg7x7wa.css';
import '../../css/i/icahpubho.css';
import '../../css/h/hi_4q9gft.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnuvuxczj"/><path class="r6qg7x7wa"/><path class="icahpubho"/><g id="SVGNrKxlDaG" transform="matrix(80 0 0 80 110 240)"><path id="SVGV4UZXcSz" transform="rotate(18 0 -1)" class="hi_4q9gft"/><use width="100%" height="100%" href="#SVGV4UZXcSz" transform="scale(-1 1)"/></g><use width="100%" height="100%" href="#SVGNrKxlDaG" transform="rotate(72 110 240)"/><use width="100%" height="100%" href="#SVGNrKxlDaG" transform="rotate(144 110 240)"/><use width="100%" height="100%" href="#SVGNrKxlDaG" transform="rotate(-144 110 240)"/><use width="100%" height="100%" href="#SVGNrKxlDaG" transform="rotate(-72 110 240)"/>`,
		"fallback": "flag:gw-4x3",
	});
}

export default Component;
