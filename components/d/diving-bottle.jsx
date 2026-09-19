import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/u4sexs81j.css';
import '../../css/o/o79o6ib8v.css';
import '../../css/m/mg0dmqb6d.css';
import '../../css/t/tbxfsnbba.css';
import '../../css/j/jys39cmes.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGtOPbNcPi"><g class="aql7dnt-u"><path class="u4sexs81j"/><path class="o79o6ib8v"/><rect class="mg0dmqb6d"/><rect class="tbxfsnbba"/><path class="jys39cmes"/></g></mask></defs><path mask="url(#SVGtOPbNcPi)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:diving-bottle",
	});
}

export default Component;
