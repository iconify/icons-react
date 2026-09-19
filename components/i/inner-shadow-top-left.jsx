import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/n/ngt05uq9h.css';
import '../../css/s/scz526buu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG223F0coz"><g class="gopnm44um"><path clip-rule="evenodd" class="ngt05uq9h"/><path class="scz526buu"/></g></mask></defs><path mask="url(#SVG223F0coz)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:inner-shadow-top-left",
	});
}

export default Component;
