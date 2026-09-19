import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/q/q9_e0ab3k.css';
import '../../css/e/eiyu3qb0h.css';
import '../../css/e/ezkgjkbvi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGTshhGczL"><g class="s9cl3zbei"><path class="q9_e0ab3k"/><path class="eiyu3qb0h"/><path class="ezkgjkbvi"/></g></mask></defs><path mask="url(#SVGTshhGczL)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:facial-cleanser",
	});
}

export default Component;
