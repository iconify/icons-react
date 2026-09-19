import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihulpbbfd.css';
import '../../css/g/gppy3kbck.css';
import '../../css/l/lp88p5p5k.css';
import '../../css/m/mjj43ob5t.css';
import '../../css/j/jc9yl03fw.css';
import '../../css/d/daw9omb9g.css';
import '../../css/i/io9ucubfx.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGDsxdcbBv" x1="187.947" x2="187.947" y1="123.859" y2="258.865" gradientUnits="userSpaceOnUse"><stop offset="0" class="ihulpbbfd"/><stop offset="1" class="gppy3kbck"/></linearGradient><linearGradient id="SVGzBV3cYOi" x1="187.947" x2="187.947" y1="123.859" y2="258.865" gradientTransform="translate(-14.382 36.828)scale(.143)" gradientUnits="userSpaceOnUse" href="#SVGDsxdcbBv"/><clipPath id="SVGop84FeAW" clipPathUnits="userSpaceOnUse"><path class="lp88p5p5k"/></clipPath><filter id="SVGfGO7id2f" width="1.019" height="1.08" x="-.01" y="-.04"><feGaussianBlur stdDeviation=".996"/></filter></defs><path fill="url(#SVGzBV3cYOi)" class="mjj43ob5t"/><path class="jc9yl03fw"/><path class="daw9omb9g"/><path clip-path="url(#SVGop84FeAW)" filter="url(#SVGfGO7id2f)" transform="translate(-2.638 8.33)scale(.39294)" class="io9ucubfx"/>`,
		"fallback": "devicon:filezilla-wordmark",
	});
}

export default Component;
