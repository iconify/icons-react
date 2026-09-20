import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zaen6ivzp.css';
import '../../css/t/tz73pbbpp.css';

const viewBox = {"width":719.14,"height":165.69};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zaen6ivzp"/><path class="tz73pbbpp"/>`,
		"fallback": "thesvg-color:frequencia-invisivel",
	});
}

export default Component;
