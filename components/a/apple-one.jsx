import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/i/ijwf7s55v.css';
import '../../css/o/otjh3yf2h.css';
import '../../css/j/je3cg7brs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGKtHq3p8r"><g class="s9cl3zbei"><path clip-rule="evenodd" class="ijwf7s55v"/><path class="otjh3yf2h"/><path class="je3cg7brs"/></g></mask></defs><path mask="url(#SVGKtHq3p8r)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:apple-one",
	});
}

export default Component;
