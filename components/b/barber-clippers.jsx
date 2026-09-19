import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/c/cwxxxccvd.css';
import '../../css/u/umzzf2hmp.css';
import '../../css/g/g0etr6b-w.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGzPKrwcOW"><g class="aql7dnt-u"><path class="cwxxxccvd"/><rect class="umzzf2hmp"/><path class="g0etr6b-w"/></g></mask></defs><path mask="url(#SVGzPKrwcOW)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:barber-clippers",
	});
}

export default Component;
