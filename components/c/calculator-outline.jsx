import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukfo33_vg.css';
import '../../css/a/av1yi0kgb.css';
import '../../css/s/sktfymbar.css';
import '../../css/f/f3d67l1cv.css';
import '../../css/r/r3lhpubxr.css';
import '../../css/m/map64wb8l.css';
import '../../css/q/q98nn5baj.css';
import '../../css/m/mp4ol7bdc.css';
import '../../css/f/f-8mzcbjd.css';
import '../../css/d/dnbht7k_l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="ukfo33_vg"/><path class="av1yi0kgb"/><circle class="sktfymbar"/><circle class="f3d67l1cv"/><circle class="r3lhpubxr"/><circle class="map64wb8l"/><circle class="q98nn5baj"/><circle class="mp4ol7bdc"/><circle class="f-8mzcbjd"/><rect class="dnbht7k_l"/>`,
		"fallback": "famicons:calculator-outline",
	});
}

export default Component;
