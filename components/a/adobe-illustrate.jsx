import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/m2blynbna.css';
import '../../css/m/mf9l54b1n.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGJaOesbpH"><g class="s9cl3zbei"><path class="m2blynbna"/><path class="mf9l54b1n"/></g></mask></defs><path mask="url(#SVGJaOesbpH)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:adobe-illustrate",
	});
}

export default Component;
