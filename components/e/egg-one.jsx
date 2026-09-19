import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/h/hcd031bpd.css';
import '../../css/k/kdubn7zbs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGeKtK9bpq"><g class="rohhhzb0l"><path class="hcd031bpd"/><path class="kdubn7zbs"/></g></mask></defs><path mask="url(#SVGeKtK9bpq)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:egg-one",
	});
}

export default Component;
