import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n2qwyvvft.css';
import '../../css/k/kxxy24ymj.css';
import '../../css/w/wkbpp1dip.css';
import '../../css/l/lbn781o5h.css';
import '../../css/n/ntch1_bjc.css';
import '../../css/n/nrzeuolbv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGWrPTMd0T"><g class="ft5dv1b6b"><path class="n2qwyvvft"/><path class="kxxy24ymj"/><circle class="wkbpp1dip"/><path class="lbn781o5h"/><circle class="ntch1_bjc"/><circle class="nrzeuolbv"/></g></mask></defs><path mask="url(#SVGWrPTMd0T)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:baby-app",
	});
}

export default Component;
