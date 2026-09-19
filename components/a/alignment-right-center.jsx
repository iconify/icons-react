import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/i/i5p4ugbzq.css';
import '../../css/i/i7dk0bccc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGRjf9uc6W"><g class="gopnm44um"><rect class="i5p4ugbzq"/><path class="i7dk0bccc"/></g></mask></defs><path mask="url(#SVGRjf9uc6W)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:alignment-right-center",
	});
}

export default Component;
