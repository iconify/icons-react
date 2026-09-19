import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iri1-0m3t.css';
import '../../css/g/gy85065lx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGPVtwAcre" class="iri1-0m3t"/></defs><path class="gy85065lx"/><use width="30" height="20" href="#SVGPVtwAcre" transform="translate(128 128)scale(76.8)"/><use width="30" height="20" href="#SVGPVtwAcre" transform="rotate(239 142.6 -47)scale(25.5827)"/><use width="30" height="20" href="#SVGPVtwAcre" transform="rotate(-98.1 198 -82)scale(25.6)"/><use width="30" height="20" href="#SVGPVtwAcre" transform="rotate(-74 272.4 -114)scale(25.6137)"/><use width="30" height="20" href="#SVGPVtwAcre" transform="matrix(16 -19.968 19.968 16 256 230.4)"/>`,
		"fallback": "flag:cn-1x1",
	});
}

export default Component;
