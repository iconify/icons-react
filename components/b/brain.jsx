import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csw0kbbpv.css';
import '../../css/k/ky9s8j_lj.css';
import '../../css/n/nrlaeggxi.css';
import '../../css/y/yf88pr0jd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGvVYTQdqR"><g class="csw0kbbpv"><path class="ky9s8j_lj"/><path clip-rule="evenodd" class="nrlaeggxi"/><path class="yf88pr0jd"/></g></mask></defs><path mask="url(#SVGvVYTQdqR)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:brain",
	});
}

export default Component;
