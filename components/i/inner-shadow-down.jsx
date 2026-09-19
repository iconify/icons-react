import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/n/ngt05uq9h.css';
import '../../css/j/jm74ucmha.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGHyXk6dnp"><g class="gopnm44um"><path clip-rule="evenodd" class="ngt05uq9h"/><path class="jm74ucmha"/></g></mask></defs><path mask="url(#SVGHyXk6dnp)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:inner-shadow-down",
	});
}

export default Component;
