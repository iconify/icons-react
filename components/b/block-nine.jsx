import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uijzg9bmt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGlxwUvcBQ"><path class="uijzg9bmt"/></mask></defs><path mask="url(#SVGlxwUvcBQ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:block-nine",
	});
}

export default Component;
