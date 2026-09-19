import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/n/ngt05uq9h.css';
import '../../css/o/ooh5cp4ad.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGYad7bcOu"><g class="gopnm44um"><path clip-rule="evenodd" class="ngt05uq9h"/><path class="ooh5cp4ad"/></g></mask></defs><path mask="url(#SVGYad7bcOu)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:inner-shadow-left",
	});
}

export default Component;
