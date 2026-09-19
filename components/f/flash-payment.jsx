import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/a/aheys2bnt.css';
import '../../css/h/hvfyshbwi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGdTSSBenS"><g class="gopnm44um"><path class="aheys2bnt"/><path class="hvfyshbwi"/></g></mask></defs><path mask="url(#SVGdTSSBenS)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:flash-payment",
	});
}

export default Component;
