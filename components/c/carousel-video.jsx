import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/u/ul-q5sihi.css';
import '../../css/b/b0xh22bik.css';
import '../../css/e/efp14rd8v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGn2kvzcwJ"><g class="wwvp95byt"><path class="ul-q5sihi"/><path class="b0xh22bik"/><path class="efp14rd8v"/></g></mask></defs><path mask="url(#SVGn2kvzcwJ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:carousel-video",
	});
}

export default Component;
