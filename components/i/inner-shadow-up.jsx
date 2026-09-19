import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/n/ngt05uq9h.css';
import '../../css/f/fwohfu3-q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGrTRund7K"><g class="gopnm44um"><path clip-rule="evenodd" class="ngt05uq9h"/><path class="fwohfu3-q"/></g></mask></defs><path mask="url(#SVGrTRund7K)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:inner-shadow-up",
	});
}

export default Component;
