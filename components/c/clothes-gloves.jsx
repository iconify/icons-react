import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uycfwpb3j.css';
import '../../css/a/ait1ksbom.css';
import '../../css/u/u49bplbwa.css';
import '../../css/n/nj721mbay.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGSAPgmdqH"><g class="ft5dv1b6b"><path class="uycfwpb3j"/><path class="ait1ksbom"/><path class="u49bplbwa"/><path class="nj721mbay"/></g></mask></defs><path mask="url(#SVGSAPgmdqH)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:clothes-gloves",
	});
}

export default Component;
